import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("niy")
export default class NiyController {
  @operation({
    summary: "Get Niy",
  })
  @get()
  static getNiy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Niy",
  })
  @post("{id}")
  static createNiy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
