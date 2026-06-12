import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iim")
export default class IimController {
  @operation({
    summary: "Get Iim",
  })
  @get()
  static getIim = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iim",
  })
  @post("{id}")
  static createIim = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
