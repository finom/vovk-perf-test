import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fjt")
export default class FjtController {
  @operation({
    summary: "Get Fjt",
  })
  @get()
  static getFjt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fjt",
  })
  @post("{id}")
  static createFjt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
