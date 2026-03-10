import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cvi")
export default class CviController {
  @operation({
    summary: "Get Cvi",
  })
  @get()
  static getCvi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cvi",
  })
  @post("{id}")
  static createCvi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
