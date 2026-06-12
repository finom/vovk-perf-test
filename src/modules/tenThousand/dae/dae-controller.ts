import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dae")
export default class DaeController {
  @operation({
    summary: "Get Dae",
  })
  @get()
  static getDae = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dae",
  })
  @post("{id}")
  static createDae = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
