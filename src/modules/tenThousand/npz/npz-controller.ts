import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("npz")
export default class NpzController {
  @operation({
    summary: "Get Npz",
  })
  @get()
  static getNpz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Npz",
  })
  @post("{id}")
  static createNpz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
