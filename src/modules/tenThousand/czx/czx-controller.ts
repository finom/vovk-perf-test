import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("czx")
export default class CzxController {
  @operation({
    summary: "Get Czx",
  })
  @get()
  static getCzx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Czx",
  })
  @post("{id}")
  static createCzx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
