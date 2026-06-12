import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gj")
export default class GjController {
  @operation({
    summary: "Get Gj",
  })
  @get()
  static getGj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gj",
  })
  @post("{id}")
  static createGj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
