import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ge")
export default class GeController {
  @operation({
    summary: "Get Ge",
  })
  @get()
  static getGe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ge",
  })
  @post("{id}")
  static createGe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
