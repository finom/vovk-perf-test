import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ayo")
export default class AyoController {
  @operation({
    summary: "Get Ayo",
  })
  @get()
  static getAyo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ayo",
  })
  @post("{id}")
  static createAyo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
