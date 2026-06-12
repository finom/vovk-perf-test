import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cul")
export default class CulController {
  @operation({
    summary: "Get Cul",
  })
  @get()
  static getCul = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cul",
  })
  @post("{id}")
  static createCul = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
