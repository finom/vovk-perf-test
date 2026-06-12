import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("frj")
export default class FrjController {
  @operation({
    summary: "Get Frj",
  })
  @get()
  static getFrj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Frj",
  })
  @post("{id}")
  static createFrj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
