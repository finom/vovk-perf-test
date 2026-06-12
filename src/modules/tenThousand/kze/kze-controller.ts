import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kze")
export default class KzeController {
  @operation({
    summary: "Get Kze",
  })
  @get()
  static getKze = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kze",
  })
  @post("{id}")
  static createKze = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
