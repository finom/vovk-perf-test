import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("icf")
export default class IcfController {
  @operation({
    summary: "Get Icf",
  })
  @get()
  static getIcf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Icf",
  })
  @post("{id}")
  static createIcf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
