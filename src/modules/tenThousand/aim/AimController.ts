import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aim")
export default class AimController {
  @operation({
    summary: "Get Aim",
  })
  @get()
  static getAim = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aim",
  })
  @post("{id}")
  static createAim = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
