import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("che")
export default class CheController {
  @operation({
    summary: "Get Che",
  })
  @get()
  static getChe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Che",
  })
  @post("{id}")
  static createChe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
