import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lgy")
export default class LgyController {
  @operation({
    summary: "Get Lgy",
  })
  @get()
  static getLgy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lgy",
  })
  @post("{id}")
  static createLgy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
