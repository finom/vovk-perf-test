import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kyf")
export default class KyfController {
  @operation({
    summary: "Get Kyf",
  })
  @get()
  static getKyf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kyf",
  })
  @post("{id}")
  static createKyf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
