import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nbt")
export default class NbtController {
  @operation({
    summary: "Get Nbt",
  })
  @get()
  static getNbt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nbt",
  })
  @post("{id}")
  static createNbt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
