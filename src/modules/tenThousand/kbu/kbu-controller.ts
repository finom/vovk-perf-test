import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kbu")
export default class KbuController {
  @operation({
    summary: "Get Kbu",
  })
  @get()
  static getKbu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kbu",
  })
  @post("{id}")
  static createKbu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
