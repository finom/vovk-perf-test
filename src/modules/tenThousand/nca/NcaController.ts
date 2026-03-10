import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nca")
export default class NcaController {
  @operation({
    summary: "Get Nca",
  })
  @get()
  static getNca = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nca",
  })
  @post("{id}")
  static createNca = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
