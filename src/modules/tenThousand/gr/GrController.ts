import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gr")
export default class GrController {
  @operation({
    summary: "Get Gr",
  })
  @get()
  static getGr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gr",
  })
  @post("{id}")
  static createGr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
