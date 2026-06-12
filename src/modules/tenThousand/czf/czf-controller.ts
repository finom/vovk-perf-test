import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("czf")
export default class CzfController {
  @operation({
    summary: "Get Czf",
  })
  @get()
  static getCzf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Czf",
  })
  @post("{id}")
  static createCzf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
