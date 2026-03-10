import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nmz")
export default class NmzController {
  @operation({
    summary: "Get Nmz",
  })
  @get()
  static getNmz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nmz",
  })
  @post("{id}")
  static createNmz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
