import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gri")
export default class GriController {
  @operation({
    summary: "Get Gri",
  })
  @get()
  static getGri = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gri",
  })
  @post("{id}")
  static createGri = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
