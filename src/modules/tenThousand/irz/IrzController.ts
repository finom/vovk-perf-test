import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("irz")
export default class IrzController {
  @operation({
    summary: "Get Irz",
  })
  @get()
  static getIrz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Irz",
  })
  @post("{id}")
  static createIrz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
