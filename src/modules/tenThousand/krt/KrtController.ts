import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("krt")
export default class KrtController {
  @operation({
    summary: "Get Krt",
  })
  @get()
  static getKrt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Krt",
  })
  @post("{id}")
  static createKrt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
