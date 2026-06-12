import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gz")
export default class GzController {
  @operation({
    summary: "Get Gz",
  })
  @get()
  static getGz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gz",
  })
  @post("{id}")
  static createGz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
