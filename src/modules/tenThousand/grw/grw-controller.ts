import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("grw")
export default class GrwController {
  @operation({
    summary: "Get Grw",
  })
  @get()
  static getGrw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Grw",
  })
  @post("{id}")
  static createGrw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
