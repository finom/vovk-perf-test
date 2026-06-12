import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("diw")
export default class DiwController {
  @operation({
    summary: "Get Diw",
  })
  @get()
  static getDiw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Diw",
  })
  @post("{id}")
  static createDiw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
