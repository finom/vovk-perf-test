import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("km")
export default class KmController {
  @operation({
    summary: "Get Km",
  })
  @get()
  static getKm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Km",
  })
  @post("{id}")
  static createKm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
