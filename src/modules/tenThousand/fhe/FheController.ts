import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fhe")
export default class FheController {
  @operation({
    summary: "Get Fhe",
  })
  @get()
  static getFhe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fhe",
  })
  @post("{id}")
  static createFhe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
