import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ell")
export default class EllController {
  @operation({
    summary: "Get Ell",
  })
  @get()
  static getEll = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ell",
  })
  @post("{id}")
  static createEll = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
