import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ngy")
export default class NgyController {
  @operation({
    summary: "Get Ngy",
  })
  @get()
  static getNgy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ngy",
  })
  @post("{id}")
  static createNgy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
