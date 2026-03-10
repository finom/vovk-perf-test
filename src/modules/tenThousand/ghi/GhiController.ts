import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ghi")
export default class GhiController {
  @operation({
    summary: "Get Ghi",
  })
  @get()
  static getGhi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ghi",
  })
  @post("{id}")
  static createGhi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
