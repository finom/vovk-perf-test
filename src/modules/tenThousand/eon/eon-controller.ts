import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eon")
export default class EonController {
  @operation({
    summary: "Get Eon",
  })
  @get()
  static getEon = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eon",
  })
  @post("{id}")
  static createEon = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
