import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mca")
export default class McaController {
  @operation({
    summary: "Get Mca",
  })
  @get()
  static getMca = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mca",
  })
  @post("{id}")
  static createMca = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
