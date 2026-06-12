import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("czw")
export default class CzwController {
  @operation({
    summary: "Get Czw",
  })
  @get()
  static getCzw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Czw",
  })
  @post("{id}")
  static createCzw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
