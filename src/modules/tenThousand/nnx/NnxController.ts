import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nnx")
export default class NnxController {
  @operation({
    summary: "Get Nnx",
  })
  @get()
  static getNnx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nnx",
  })
  @post("{id}")
  static createNnx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
