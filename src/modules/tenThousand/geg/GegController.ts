import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("geg")
export default class GegController {
  @operation({
    summary: "Get Geg",
  })
  @get()
  static getGeg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Geg",
  })
  @post("{id}")
  static createGeg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
