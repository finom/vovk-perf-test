import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("adc")
export default class AdcController {
  @operation({
    summary: "Get Adc",
  })
  @get()
  static getAdc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Adc",
  })
  @post("{id}")
  static createAdc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
