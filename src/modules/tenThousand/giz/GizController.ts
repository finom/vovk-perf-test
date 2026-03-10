import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("giz")
export default class GizController {
  @operation({
    summary: "Get Giz",
  })
  @get()
  static getGiz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Giz",
  })
  @post("{id}")
  static createGiz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
