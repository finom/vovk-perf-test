import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("npt")
export default class NptController {
  @operation({
    summary: "Get Npt",
  })
  @get()
  static getNpt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Npt",
  })
  @post("{id}")
  static createNpt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
