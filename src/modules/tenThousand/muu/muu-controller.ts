import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("muu")
export default class MuuController {
  @operation({
    summary: "Get Muu",
  })
  @get()
  static getMuu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Muu",
  })
  @post("{id}")
  static createMuu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
