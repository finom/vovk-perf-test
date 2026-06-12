import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ndh")
export default class NdhController {
  @operation({
    summary: "Get Ndh",
  })
  @get()
  static getNdh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ndh",
  })
  @post("{id}")
  static createNdh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
