import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("efh")
export default class EfhController {
  @operation({
    summary: "Get Efh",
  })
  @get()
  static getEfh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Efh",
  })
  @post("{id}")
  static createEfh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
