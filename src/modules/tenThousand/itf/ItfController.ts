import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("itf")
export default class ItfController {
  @operation({
    summary: "Get Itf",
  })
  @get()
  static getItf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Itf",
  })
  @post("{id}")
  static createItf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
