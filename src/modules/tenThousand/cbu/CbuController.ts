import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cbu")
export default class CbuController {
  @operation({
    summary: "Get Cbu",
  })
  @get()
  static getCbu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cbu",
  })
  @post("{id}")
  static createCbu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
