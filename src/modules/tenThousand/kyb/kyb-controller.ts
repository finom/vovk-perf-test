import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kyb")
export default class KybController {
  @operation({
    summary: "Get Kyb",
  })
  @get()
  static getKyb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kyb",
  })
  @post("{id}")
  static createKyb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
