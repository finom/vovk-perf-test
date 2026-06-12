import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nx")
export default class NxController {
  @operation({
    summary: "Get Nx",
  })
  @get()
  static getNx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nx",
  })
  @post("{id}")
  static createNx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
