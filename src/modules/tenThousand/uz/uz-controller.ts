import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("uz")
export default class UzController {
  @operation({
    summary: "Get Uz",
  })
  @get()
  static getUz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Uz",
  })
  @post("{id}")
  static createUz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
