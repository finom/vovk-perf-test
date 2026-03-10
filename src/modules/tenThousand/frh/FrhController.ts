import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("frh")
export default class FrhController {
  @operation({
    summary: "Get Frh",
  })
  @get()
  static getFrh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Frh",
  })
  @post("{id}")
  static createFrh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
