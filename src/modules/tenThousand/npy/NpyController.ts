import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("npy")
export default class NpyController {
  @operation({
    summary: "Get Npy",
  })
  @get()
  static getNpy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Npy",
  })
  @post("{id}")
  static createNpy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
