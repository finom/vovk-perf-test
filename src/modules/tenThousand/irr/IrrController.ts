import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("irr")
export default class IrrController {
  @operation({
    summary: "Get Irr",
  })
  @get()
  static getIrr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Irr",
  })
  @post("{id}")
  static createIrr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
