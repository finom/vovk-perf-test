import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cva")
export default class CvaController {
  @operation({
    summary: "Get Cva",
  })
  @get()
  static getCva = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cva",
  })
  @post("{id}")
  static createCva = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
