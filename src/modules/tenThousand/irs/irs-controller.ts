import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("irs")
export default class IrsController {
  @operation({
    summary: "Get Irs",
  })
  @get()
  static getIrs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Irs",
  })
  @post("{id}")
  static createIrs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
